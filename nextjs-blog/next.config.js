module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "https://vercelblogtest.vercel.app/tomd-vercel.cdn.zephr.com/zephr/features",
        destination: "https://tomd-vercel.cdn.zephr.com/zephr/features",
      },
    ];
  };
  return {
    rewrites,
  };
};
