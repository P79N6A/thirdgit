Page({
  navigate(e) {
    const { url, openType = 'navigateTo' } = e.target.dataset;
    my[openType]({ url });
  }
})