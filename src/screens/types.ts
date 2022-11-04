import {NavigationProp, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamsList = {
    Home: undefined
    Details: {
        url: string
    }
}

export type DetailsPropsType = NativeStackScreenProps<RootStackParamsList, 'Details'>
export type NavigationUseType = NavigationProp<RootStackParamsList>

export const useAppNavigation = () => useNavigation<NavigationUseType>()