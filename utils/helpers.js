// শুধু দেখার জন্য (প্রথমবার API path বের করতে)
export async function inspectAPI(page, apiPath) {
  await page.route(`**${apiPath}**`, async route => {
    const request = route.request();

    console.log('=== REQUEST ===');
    console.log('Method:', request.method());
    console.log('Body:', request.postData());

    const response = await route.fetch();
    const body = await response.json();

    console.log('=== RESPONSE ===');
    console.log('Body:', JSON.stringify(body, null, 2));

    await route.fulfill({ response });
  });
}

// Response mock করার জন্য
export async function interceptAPI(page, apiPath, responseBody, status = 200) {
  await page.route(`**${apiPath}**`, async route => {
    await route.fulfill({
      status: status,
      contentType: 'application/json',
      body: JSON.stringify(responseBody)
    });
  });
}