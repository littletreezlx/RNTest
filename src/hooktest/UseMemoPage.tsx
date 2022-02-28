import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Button, Text, View} from 'react-native';

export default function () {
  console.log('render_root');
  const [A, setA] = useState(true);
  const memoTest = useMemo(() => {
    console.log('in memo');
    return 1;
  }, []);
  // console.log(memoTest);

  const callbackTest = useCallback(() => {
    console.log('in callback');
    return 1;
  }, []);

  console.log(callbackTest());

  const onRress = useCallback(() => {
    console.log('onPress' + memoTest);
    setA(true);
  }, [memoTest]);

  const MemoView = useMemo(() => {
    console.log('render_momo');

    return <Text>123</Text>;
  }, []);

  const CallBackView = useCallback(() => {
    console.log('render_callback');
    return <Text>321</Text>;
  }, []);

  return (
    <View>
      <Button title="useMemo" onPress={onRress} />
      {/* <MemoView /> */}
      {MemoView}
      <CallBackView />
      <Button title="useMuseCallbackemo" onPress={callbackTest} />
    </View>
  );
}
