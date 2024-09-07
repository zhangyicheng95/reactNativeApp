import { Text, View, StyleSheet } from "react-native";

const SettingPage: React.FC = (props: any) => {
    return (
        <View style={styles.setting}>
            <Text>setting</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    setting: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SettingPage;
