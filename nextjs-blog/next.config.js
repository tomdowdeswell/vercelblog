module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/zephr/features",
        destination: "https://tomd-vercel_personal_test.cdn.zephr.com/zephr/features",
      },
      {
        source: "/blaize/features",
        destination: "https://tomd-vercel_personal_test.cdn.zephr.com/blaize/features",
      },
      {
        source: "/zephr/feature-decisions",
        destination: "https://tomd-vercel_personal_test.cdn.zephr.com/zephr/feature-decisions",
      },
      {
        source: "/blaize/feature-decisions",
        destination: "https://tomd-vercel_personal_test.cdn.zephr.com/blaize/feature-decisions",
      },
    ];
  };
  return {
    rewrites,
  };
};
