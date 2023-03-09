import { Center } from '@chakra-ui/react';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

function UnityPage() {
  const { unityProvider } = useUnityContext({
    loaderUrl: './build-loader.js',
    dataUrl: './build.data',
    frameworkUrl: './build-framework.js',
    codeUrl: './build.wasm',
  });

  return (
    <Center>
      <div style={{ width: '500px', height: '500px' }}>
        <Unity
          style={{ width: '100%', height: '100%' }}
          unityProvider={unityProvider}
        />
      </div>
    </Center>
  );
}

export default UnityPage;
