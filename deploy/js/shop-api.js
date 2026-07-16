/**
 * Shared shop helpers — Supabase REST via fetch (no SDK required).
 * Expects window.SITE_CONFIG = { SUPABASE_URL, SUPABASE_ANON_KEY }
 */
(function (global) {
  const cfg = () => global.SITE_CONFIG || {};

  function configured() {
    const c = cfg();
    return !!(c.SUPABASE_URL && c.SUPABASE_ANON_KEY);
  }

  function headers(token) {
    const c = cfg();
    const h = {
      apikey: c.SUPABASE_ANON_KEY,
      Authorization: 'Bearer ' + (token || c.SUPABASE_ANON_KEY),
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    };
    return h;
  }

  async function rest(path, opts, token) {
    const c = cfg();
    if (!configured()) throw new Error('Supabase not configured');
    const res = await fetch(c.SUPABASE_URL.replace(/\/$/, '') + '/rest/v1/' + path, {
      ...opts,
      headers: { ...headers(token), ...(opts && opts.headers) },
    });
    if (res.status === 204) return null;
    const text = await res.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch (_) { data = text; }
    if (!res.ok) {
      const msg = (data && (data.message || data.error_description || data.msg)) || res.statusText;
      throw new Error(msg || 'Request failed');
    }
    return data;
  }

  async function auth(path, body) {
    const c = cfg();
    if (!configured()) throw new Error('Supabase not configured');
    const res = await fetch(c.SUPABASE_URL.replace(/\/$/, '') + '/auth/v1/' + path, {
      method: 'POST',
      headers: {
        apikey: c.SUPABASE_ANON_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error_description || data.msg || data.message || 'Auth failed');
    return data;
  }

  const STORAGE_KEY = '43ind_admin_session';

  function saveSession(session) {
    if (session) localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    else localStorage.removeItem(STORAGE_KEY);
  }

  function getSession() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  function accessToken() {
    const s = getSession();
    return s && s.access_token ? s.access_token : null;
  }

  async function signIn(email, password) {
    const data = await auth('token?grant_type=password', { email, password });
    saveSession(data);
    return data;
  }

  function signOut() {
    saveSession(null);
  }

  /** Public: published products only */
  async function fetchPublishedProducts() {
    const rows = await rest(
      'products?published=eq.true&select=*&order=sort_order.asc.nullslast,name.asc',
      { method: 'GET' }
    );
    return (rows || []).map(normalizeProduct);
  }

  /** Admin: all products */
  async function fetchAllProducts() {
    const token = accessToken();
    if (!token) throw new Error('Not signed in');
    const rows = await rest(
      'products?select=*&order=sort_order.asc.nullslast,updated_at.desc',
      { method: 'GET' },
      token
    );
    return (rows || []).map(normalizeProduct);
  }

  async function upsertProduct(product) {
    const token = accessToken();
    if (!token) throw new Error('Not signed in');
    const row = denormalizeProduct(product);
    if (product.id) {
      const rows = await rest(
        'products?id=eq.' + encodeURIComponent(product.id),
        { method: 'PATCH', body: JSON.stringify(row) },
        token
      );
      return normalizeProduct((rows && rows[0]) || row);
    }
    const rows = await rest(
      'products',
      { method: 'POST', body: JSON.stringify(row) },
      token
    );
    return normalizeProduct((rows && rows[0]) || row);
  }

  async function setPublished(id, published) {
    const token = accessToken();
    if (!token) throw new Error('Not signed in');
    await rest(
      'products?id=eq.' + encodeURIComponent(id),
      { method: 'PATCH', body: JSON.stringify({ published: !!published, updated_at: new Date().toISOString() }) },
      token
    );
  }

  async function deleteProduct(id) {
    const token = accessToken();
    if (!token) throw new Error('Not signed in');
    await rest(
      'products?id=eq.' + encodeURIComponent(id),
      { method: 'DELETE' },
      token
    );
  }

  function normalizeProduct(row) {
    if (!row) return null;
    return {
      id: row.id,
      sku: row.sku || '',
      category: row.category || 'general',
      name: row.name || '',
      description: row.description || row.sub || '',
      price: Number(row.price_usd != null ? row.price_usd : row.price) || 0,
      stock: Number(row.stock != null ? row.stock : 0),
      badge: row.badge || '',
      imageUrl: row.image_url || '',
      published: row.published !== false,
      sortOrder: row.sort_order != null ? Number(row.sort_order) : 0,
      updatedAt: row.updated_at,
    };
  }

  function denormalizeProduct(p) {
    return {
      sku: p.sku,
      category: p.category,
      name: p.name,
      description: p.description || '',
      price_usd: Number(p.price),
      stock: Math.max(0, parseInt(p.stock, 10) || 0),
      badge: p.badge || null,
      image_url: p.imageUrl || null,
      published: p.published !== false,
      sort_order: p.sortOrder != null ? Number(p.sortOrder) : 0,
      updated_at: new Date().toISOString(),
    };
  }

  global.ShopAPI = {
    configured,
    signIn,
    signOut,
    getSession,
    accessToken,
    fetchPublishedProducts,
    fetchAllProducts,
    upsertProduct,
    setPublished,
    deleteProduct,
    normalizeProduct,
  };
})(typeof window !== 'undefined' ? window : globalThis);
