export default function MyApp ({ Component, pageProps }:any) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            font-family: 'Nunito', Roboto, system-ui, Tahoma, sans-serif;
          }
        `}
      </style>
    </>
  );
};
