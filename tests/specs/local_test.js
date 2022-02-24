describe('BrowserStack Local Testing', function() {
  it('can check tunnel working', async function () {
    await browser.url('http://bs-local.com:45691/check')
    const body = await $('<body>')
    await browser.waitUntil(
      async () => (await body.getText()).match(/Up and running/i),
      5000,
      "Local is not up and running"
    );
  });
});
