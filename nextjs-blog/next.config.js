module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/zephr/features",
        destination: "https://tomd-vercel.cdn.zephr.com/zephr/features",
      },
    ];
  };
  return {
    rewrites,
  };
};
