async function run() {
  try {
    const res = await fetch('http://localhost:3000/quotation');
    const text = await res.text();
    if (!res.ok) {
      console.log("HTTP ERROR:", res.status);
      console.log(text.substring(0, 1500)); // First 1500 chars of HTML error
    } else {
      console.log("SUCCESS, length:", text.length);
      console.log(text.substring(0, 500));
    }
  } catch (e) {
    console.error("Network Error:", e);
  }
}
run();
