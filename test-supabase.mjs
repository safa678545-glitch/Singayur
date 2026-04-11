// Quick diagnostic script — reads .env and tests the Supabase REST API
import { readFileSync } from 'fs';

// Parse .env manually (no dotenv dependency needed)
const envContent = readFileSync('.env', 'utf8');
const env = {};
for (const line of envContent.split('\n')) {
  const match = line.match(/^(\w+)=(.+)$/);
  if (match) env[match[1]] = match[2].trim();
}

const url = env.VITE_SUPABASE_URL;
const key = env.VITE_SUPABASE_PUBLISHABLE_KEY || env.VITE_SUPABASE_ANON_KEY;

console.log('--- Supabase Diagnostic ---');
console.log('URL found:', url ? '✅ Yes' : '❌ No');
console.log('Key found:', key ? '✅ Yes' : '❌ No');

if (!url || !key) {
  console.log('\n❌ Missing credentials. Check your .env file.');
  process.exit(1);
}

// Test blog_posts table
console.log('\n--- Testing blog_posts table ---');
try {
  const res = await fetch(`${url}/rest/v1/blog_posts?select=*&limit=1`, {
    headers: {
      'apikey': key,
      'Authorization': `Bearer ${key}`,
    },
  });
  console.log(`Status: ${res.status} ${res.statusText}`);
  const body = await res.text();
  if (res.ok) {
    console.log('✅ blog_posts table exists! Response:', body);
  } else {
    console.log('❌ Error:', body);
  }
} catch (e) {
  console.log('❌ Network error:', e.message);
}

// Test testimonials table
console.log('\n--- Testing testimonials table ---');
try {
  const res = await fetch(`${url}/rest/v1/testimonials?select=*&limit=1`, {
    headers: {
      'apikey': key,
      'Authorization': `Bearer ${key}`,
    },
  });
  console.log(`Status: ${res.status} ${res.statusText}`);
  const body = await res.text();
  if (res.ok) {
    console.log('✅ testimonials table exists! Response:', body);
  } else {
    console.log('❌ Error:', body);
  }
} catch (e) {
  console.log('❌ Network error:', e.message);
}
