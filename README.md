**master**: expo init
* Default expo init boilerplate with tab navigation
* Simplify HomeScreen
* Don't focus on tabs, just leave them as is and only focus on HomeScreen tab

**starting-point**: Remove extra boilerplate from HomeScreen.js
* Fetch concerts from apis.is in componentDidMount
* Render the first item in the array, show error
* Add ActivityIndicator to wait until data has been fetched
* Move renderconcerts to function, show eventDateName in View
* Checkout to next branch for aesthetics

**fetch-single-item-render**: Fetches data and renders first

**render-list-of-items**: Renders each item individually in View
* Add a Flatlist
* Add key to fetch mapping
* Change renderConcerts function to renderItem
* Use ListEmptyComponent for ActivityIndicator

**render-flatlist**: Renders items in FlatList
* console.log this.props to show navigation props of component, gets added because it's a screen in a StackNav
* Add TouchableOpacity around cell
* onPress uses navigation props
* Create DetailScreen.js, prints basic text to begin with
* Add to HomeStack in MainTabNavigator.js
* Pass concert as a param to DetailScreen

**navigate-to-item**: TouchableOpacity around item that navigates to DetailScreen.js, Modifies MainTabNavigator.js
