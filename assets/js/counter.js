document$.subscribe(() => {
  // Prevent duplicate script injection
  if (document.querySelector('script[data-id="e45cdaff-457f-4ae4-b41d-7bf122de1b06"]')) return;

  const script = document.createElement("script");
  script.src = "https://cdn.counter.dev/script.js";
  script.setAttribute("data-id", "e45cdaff-457f-4ae4-b41d-7bf122de1b06");
  script.setAttribute("data-utcoffset", "-7");
  document.body.appendChild(script);
});
