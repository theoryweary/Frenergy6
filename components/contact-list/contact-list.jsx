import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Input, Icon, Item } from 'native-base';
// import EStyleSheet from 'react-native-extended-stylesheet';
// import AlphabetFlatList from 'react-native-alphabetflatlist';
// import { FlatlistHeader, FlatlistSeparator, FlatlistFooter } from './'


class ContactFlatList extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         searchInput: '',
    //         scrollEnabled: true //scrollEnabled
    //     }
    //     this.setScrollEnabled = this.setScrollEnabled.bind(this);
    // }

    // setScrollEnabled(scrollEnabled) {
    //     this.setState({
    //         scrollEnabled,
    //     });
    // }

    // getItemLayout = (data, index) => {
    //     const rowheight = EStyleSheet.value('$contactRowHeight')
    //     return {
    //         length: rowheight + 1,
    //         offset: (rowheight + 1) * index, //offset should match  height of Contact Row + FlatlistSeparator (height: 1)
    //         index
    //     }
    // };


    // ref = {(ref) => this.rowRef = { ...this.rowRef, [`${item.recordID}`]: ref }}
    renderFlatList = () => {
        // if (!this.props.showAlphabetFlatist) {
            return (
                <View style={{ flex: 1 }}>
                    <FlatList
                        ref="FlatList"
                      /*
                        scrollEnabled={this.state.scrollEnabled}
                        ListHeaderComponent={() => FlatlistHeader({
                            handleUpdateContactSortOrder: this.props.handleUpdateContactSortOrder,
                            contactSortOrder: this.props.contactSortOrder
                        })}
                        ListFooterComponent={<FlatlistFooter />}
                        ItemSeparatorComponent={FlatlistSeparator}


                        initialNumToRender={10}
                        removedClippedSubviews={false}
                        */
                        data={this.filterContactsWithSearchbar()}
                        renderItem={({ item }) => (
                            <this.props.renderRow
                                recordID={item.recordID}
                                systemContact={item}
                          /*
                                setScrollEnabled={scrollEnabled => this.setScrollEnabled(scrollEnabled)}
                                navigation={this.props.navigation}
                                */
                            />
                        )}
                        keyExtractor={item => item.recordID.toString()}
                    />
                </View>
            )
        // } else {
            // return (
            //     <View style={{ flex: 1, }}>
            //         <AlphabetFlatList
            //             data={this.filterContactsWithSearchbar()}
            //             /*
            //             ItemSeparatorComponent={FlatlistSeparator}
            //             bounces={false}

            //             */
            //             renderItem={({ item }) => (
            //                 <this.props.renderRow
            //                     recordID={item.recordID}
            //                     systemContact={item}
            //                 />
            //             )}
            //           /*  
            //             keyExtractor={item => item.recordID.toString()}
            //             initialNumToRender={10}
            //             removedClippedSubviews={false}
            //             matchFieldName="fullName"
            //             getItemLayout={this.getItemLayout}
            //             alphabetListProps={alphabetListProps}
            //             */
            //         />
            //     </View>
            // )
       // }
    }

    // filterContactsWithSearchbar = () => {
    //     return this.props.data.filter(
    //         n => n.fullName.toLowerCase().split(' ').some(
    //             //use the some() method to filter on the start of the first or last name
    //             n => n.startsWith(this.state.searchInput.toLowerCase())
    //         )
    //     )
    // }

    // renderCancelIcon = () => {
    //     if (this.state.searchInput !== '') {
    //         return (
    //             <Icon
    //                 style={styles.cancelIconStyle}
    //                 onPress={() => this.setState({ searchInput: '' })}
    //                 name="ios-close"
    //             />
    //         )
    //     }
    // }

    render() {
        // console.log('FlatList this.refs', this.refs)
        return (
            /*<View style={styles.outerViewStyle}>
                <Item style={styles.searchItemStyle}>
                    <Icon name="ios-search" />
                    <Input
                        placeholder="Search"
                        onChangeText={(searchInput) => this.setState({ searchInput })}
                        value={this.state.searchInput}
                    />
                    {this.renderCancelIcon()}
                </Item>
                */
                {this.renderFlatList()}
                /*
            </View>
            */
            )
    }
}

// const alphabetListProps = {
//     selectedAlphabetTextStyle: {
//         color: '#fff'
//     },
//     alphabetButtonStyle: {
//         backgroundColor: '#fff'
//     },
//     selectedAlphabetButtonStyle: {
//         backgroundColor: 'orange',
//         height: 30,
//         width: 30,
//         borderRadius: 15,
//         shadowOpacity: 0.5,
//         shadowOffset: { width: 2, height: 2 },
//         elevation: 4
//     },
//     alphabetButtonStyle: {
//         backgroundColor: '#fff',
//         height: 30,
//         width: 30,
//         borderRadius: 15,
//         shadowOpacity: 0.5,
//         shadowOffset: { width: 2, height: 2 },
//         elevation: 4
//     },
//     alphabetListContainerStyle: {
//         // flex: 0.2,
//         marginRight: 20  //use this to move the list of letters left or right
//     },
//     showsVerticalScrollIndicator: false
// }

// const styles = EStyleSheet.create({
//     searchItemStyle: {
//         marginLeft: 20,
//         marginRight: 20
//     },
//     outerViewStyle: {
//         flex: 1,
//         height: '$contactRowHeight',
//     },
//     cancelIconStyle: {
//         fontSize: 28,
//         fontWeight: 'bold'
//     }
// });

//export ContactFlatList;
