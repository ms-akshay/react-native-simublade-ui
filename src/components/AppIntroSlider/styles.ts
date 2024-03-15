import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImageStyle: {
    height: '100%',
    width: '100%',
  },
  textWrapperBottom: {
    justifyContent: 'center',
    marginVertical: 30,
    padding: 20,
    position: 'absolute',
    bottom: 220
  },
  textWrapperTop: {
    justifyContent: 'center',
    marginVertical: 30,
    padding: 20,
  },
  headerStyle: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    color: '#278194'
  },
  descriptionStyle: {
    fontSize: 17,
    color: '#278194'
  },
  paginationWrapperBottom: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationWrapperTop: {
    position: 'absolute',
    top: 25,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 8,
    width: 35,
    borderRadius: 20,
    backgroundColor: '#278194',
    marginLeft: 10,
  },
  buttonStyleBottom: {
    height: 60,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#47734D',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 200
  },
  buttonStyleTop: {
    height: 60,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#47734D',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 180
  },
  buttonTextStyle: {
    fontSize: 20
  }
});