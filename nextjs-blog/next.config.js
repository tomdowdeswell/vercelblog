module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/zephr/:slug*",
        destination: "https://tomd-vercel_personal_test.cdn.zephr.com/zephr/:slug*",
      },
      {
        source: "/blaize/:slug*",
        destination: "https://tomd-vercel_personal_test.cdn.zephr.com/blaize/:slug*",
      },
//       {
//         source: "/zephr/feature-decisions",
//         destination: "https://tomd-vercel_personal_test.cdn.zephr.com/zephr/feature-decisions",
//       },
//       {
//         source: "/blaize/feature-decisions",
//         destination: "https://tomd-vercel_personal_test.cdn.zephr.com/blaize/feature-decisions",
//       },
//       {
//         source: "/blaize/register",
//         destination: "https://tomd-vercel_personal_test.cdn.zephr.com/blaize/register",
//       },
    ];
  };
  return {
    rewrites,
  };
};
