import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'blue'
  },
  container: {
    marginTop: '40%', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',   
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
    backgroundColor: 'orange',
  },
  button: {
    backgroundColor: '#6200ee',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  timer: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
    backgroundColor: 'red'
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center'
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 25,
    marginBottom: 10,
  },
  modalScore: {
    fontSize: 36,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#28a745',
  },
  modalButton: {
    backgroundColor: '#28a745',
  },
  startButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 100,
    height: 50,
  },
  startButtonText: {
    color: '#000',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default styles;
