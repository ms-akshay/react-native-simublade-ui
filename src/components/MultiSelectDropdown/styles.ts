import { Dimensions, StyleSheet } from "react-native";
const BannerWidth = Dimensions.get('window').width - 20;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  noItemSelected: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold'
  },
  selectView: {
    height: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#b2b2b2',
  },
  cardFooter: {
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: Dimensions.get('window').width,
  },
  footerText: {
    color: '#fff',
    padding: 10
  },
  selectListTitle: {
    color: 'white',
    marginTop: 10,
    fontSize: 15
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  cardMain: {
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: Dimensions.get('window').width / 2.2,
  },
  imageStyle: {
    width: 100,
    height: 100
  },
  nameStyle: {
    color: 'white',
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold'
  },
  modalMain: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flex: 1,
    position: 'absolute',
    left: 0, right: 0,
    top: 0, bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalTitleView: {
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: "row",
    borderBottomColor: "#efefef"
  },
  modalView: {
    backgroundColor: "rgba(158, 158, 158, 1)",
    width: BannerWidth,
    height: 'auto',
    maxHeight: '30%',
    borderRadius: 10
  },
  modalTitle: {
    fontSize: 15,
    color: '#000'
  },
  chooseButton: {
    backgroundColor: "#f7ad00",
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 100,
    borderRadius: 5
  },
  chooseText: {
    color: "#000",
    textAlign: "center"
  },
  dropDownIcon: {
    height: 50,
    width: 50,
    tintColor: 'white'
  },
  listItemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center'
  },
  checkBoxStyle: {
    height: 20,
    width: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4
  },
  listTextStyle:{
    marginTop: 5,
    color:  "rgba(84, 84, 84, 1)",
    fontWeight:  "bold",
    paddingHorizontal: 10,
}
});