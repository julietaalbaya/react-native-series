import { StyleSheet, Appearance, Platform, ScrollView, FlatList, View, Text, Image } from "react-native";
import { Colors } from '@/constants/Colors';
import { MENU_ITEMS } from '@/constants/MenuItems';
import MENU_IMAGES from '@/constants/MenuImages';

import { SafeAreaView } from "react-native-safe-area-context";
export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return (
        <Container>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.itemContainer}>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </View>
                        <Image source={MENU_IMAGES[index]} style={styles.itemImage} />
                    </View>
                )}
            />
        </Container>);
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({ });
}
