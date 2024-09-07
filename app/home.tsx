import { Text, View, StyleSheet } from "react-native";

const HomePage: React.FC = (props: any) => {
    return (
        <View style={styles.home}>
            <Text>homeaa</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default HomePage;
