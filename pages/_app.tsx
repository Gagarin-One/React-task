import { store, wrapper } from '@/redux/store/store';
import { Provider } from 'react-redux';

export default function MyApp({ Component, ...rest }: any) {
  const {store,props} = wrapper.useWrappedStore(rest)
  return (
    <>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
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
}
