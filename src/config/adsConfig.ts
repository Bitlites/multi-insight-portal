// 🎛️ CENTRAL REVENUE CONTROLLER
export const ADS_CONFIG = {
  // ⚡ MASTER REVENUE SWITCH: Flip to 'true' the exact day Google approves your site!
  isLive: false, 
  
  publisherId: "ca-pub-XXXXXXXXXXXXXXXX", // Your final Google AdSense Publisher ID
  
  // Registry of custom sizes to style mock layouts & map production slots cleanly
  slots: {
    topSlot: { 
      title: "Top Billboard Banner", 
      slotId: "1111111111", 
      format: "auto",
      style: "max-w-4xl min-h-[90px]"
    },
    leftSkyscraper: { 
      title: "Left Vertical Skyscraper", 
      slotId: "2222222222", 
      format: "vertical",
      style: "min-h-[600px] w-full"
    },
    midPostInline: { 
      title: "Mid-Post Content Inline", 
      slotId: "3333333333", 
      format: "fluid",
      style: "max-w-3xl min-h-[100px]"
    },
    sidebarBanner: { 
      title: "Sidebar Square Unit", 
      slotId: "4444444444", 
      format: "rectangle",
      style: "w-full min-h-[250px]"
    },
    footerHighImpression: { 
      title: "Footer High-Impression Banner", 
      slotId: "5555555555", 
      format: "horizontal",
      style: "max-w-5xl min-h-[90px]"
    }
  }
};