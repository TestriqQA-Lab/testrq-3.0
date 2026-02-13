
import http from 'http';

const targetUrl = 'http://localhost:3000/blog/post/who-should-test-your-software';

console.log(`Fetching ${targetUrl}...`);

const req = http.get(targetUrl, (res) => {
    console.log(`Status Code: ${res.statusCode}`);

    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log("Response received.");
        const descriptionMatch = data.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i) || data.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);

        if (descriptionMatch) {
            console.log("Found Meta Description:", descriptionMatch[1]);
        } else {
            console.log("Meta Description NOT FOUND!");
            // print first 1000 chars to see if it's visible or if it's a 404 page
            console.log("HEAD Preview:", data.substring(0, 1000));
        }
    });
});

req.on('error', (err) => {
    console.error("Error fetching URL:", err.name, err.message);
});

req.end();
