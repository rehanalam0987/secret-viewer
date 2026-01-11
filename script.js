const secretInput = document.getElementById("secretInput");
const createBtn = document.getElementById("createBtn");
const resultBox = document.getElementById("result");
const linkOutput = document.getElementById("linkOutput");
const copyBtn = document.getElementById("copyBtn");
const viewer = document.getElementById("viewer");
const secretView = document.getElementById("secretView");

// Encode / Decode
const encode = txt => btoa(encodeURIComponent(txt));
const decode = txt => decodeURIComponent(atob(txt));

// Create link
createBtn.onclick = () => {
  const text = secretInput.value.trim();
  if (!text) return alert("Secret likho 😅");

  const encoded = encode(text);
  const link = location.origin + location.pathname + "#s=" + encoded;

  linkOutput.value = link;
  resultBox.classList.remove("hidden");
};

// Copy
copyBtn.onclick = () => {
  linkOutput.select();
  document.execCommand("copy");
  copyBtn.textContent = "Copied!";
  setTimeout(() => copyBtn.textContent = "Copy", 1200);
};

// View secret
if (location.hash.startsWith("#s=")) {
  const data = location.hash.slice(3);
  viewer.classList.remove("hidden");
  secretView.textContent = decode(data);

  // destroy after view
  history.replaceState(null, "", location.pathname);
}
