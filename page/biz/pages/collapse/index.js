Page({
  data: {
    collapseData: {
      onTitleTap: 'handleTitleTap',
      panels: [{
        key: 1,
        title: 'Title 1',
        content: 'Content 1',
        expanded: true,
      }, {
        key: 2,
        title: 'Title 2',
        content: 'Content 2',
        expanded: false,
      }]
    },
  },
  handleTitleTap(e) {
    const { panelKey } = e.target.dataset;
    const panels = this.data.collapseData.panels;
    const itemIndex = panels.findIndex(item => item.key === panelKey);
    panels[itemIndex].expanded = !panels[itemIndex].expanded;
    this.setData({
      collapseData: {
        ...this.data.collapseData,
        panels: [...panels],
      }
    });
  },
});