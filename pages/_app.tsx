export default function MyApp ({ Component, pageProps }:any) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            font-family: 'Nunito', Roboto, system-ui, Tahoma, sans-serif;
            padding: 0;
          margin: 0;
          

          }
        }
        `}
      </style>
    </>
  );
};
