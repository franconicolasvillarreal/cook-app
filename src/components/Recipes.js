import React from "react";
import { View, FlatList, TouchableWithoutFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipe } from "../store/actions/recipes.actions";
import RecipeCard from "./RecipeCard";

const Recipes = ({ recipes, navigation }) => {
  const dispatch = useDispatch();
  const handleCardTouch = (item) => {
    dispatch(selectRecipe(item));
    navigation.navigate("RecipeDetail", { recipe: item });
  };
  return (
    <View>
      <FlatList
        data={recipes}
        keyExtractor={(recipe) => recipe.id}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            key={item.id}
            onPress={() => handleCardTouch(item)}
          >
            <View>
              <RecipeCard recipe={item}></RecipeCard>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};

export default Recipes;
