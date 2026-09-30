// Images uploaded in Lovable are referenced as `/__l5e/assets-v1/...`, a path only
// Lovable's own hosting serves. Proxy those requests to the Lovable preview host so
// the artwork loads on Netlify too.
const PREVIEW_HOST = "id-preview--f6b6b716-327b-486b-b648-924ebcc559a4.lovable.app";

export default async (req: Request) => {
  const url = new URL(req.url);
  const upstream = await fetch(`https://${PREVIEW_HOST}${url.pathname}${url.search}`, {
    method: req.method,
  });

  const headers = new Headers();
  for (const name of ["content-type", "content-length", "etag", "last-modified"]) {
    const value = upstream.headers.get(name);
    if (value) headers.set(name, value);
  }
  if (upstream.ok) headers.set("cache-control", "public, max-age=31536000, immutable");

  return new Response(upstream.body, { status: upstream.status, headers });
};

export const config = {
  path: "/__l5e/assets-v1/*",
  method: "GET",
};
