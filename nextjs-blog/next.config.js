module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/zephr/feature",
        destination: "https://tomd-vercel_personal_test.cdn.zephr.com/zephr/feature",
      },
      {
        source: "/blaize/feature",
        destination: "https://tomd-vercel_personal_test.cdn.zephr.com/blaize/feature",
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