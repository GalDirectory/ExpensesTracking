import {View, Text} from 'react-native';
import {useMMKVString} from 'react-native-mmkv';

export default () => {
  const [username] = useMMKVString('username');

  return (
    <View
      style={{
        height: 40,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        marginBottom: 30,
      }}>
      <Text style={{textAlign: 'center', fontSize: 20}}>{username}</Text>
    </View>
  );
};
