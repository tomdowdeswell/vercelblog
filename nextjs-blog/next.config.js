module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/zephr/*",
        destination: "https://tomd-vercel_personal_test.cdn.zephr.com/zephr/*",
      },
      {
        source: "/blaize/*",
        destination: "https://tomd-vercel_personal_test.cdn.zephr.com/blaize/*",
      },
    ];
  };
  return {
    rewrites,
  };
};
