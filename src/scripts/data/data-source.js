import data from '../../DATA.json';

const { restaurants } = data;

class DataSource {
  static getAllRestaurant() {
    return restaurants;
  }
}

export default DataSource;
