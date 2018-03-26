import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { fetchSchools } from "../../core/redux/schools/actions";
import Card from '../Card';
import {
  getSchoolList,
  isLoading,
} from './selectors';

class SchoolList extends Component {
  componentWillMount() {
    this.props.fetchSchools();
  }

  render() {
    const {
      schoolList,
      isLoading,
    } = this.props;
    return (
      <View>
        {isLoading
          ?
          <Text>Loading...</Text>
          :
          Object.keys(schoolList).map(school => (
            <Card item={schoolList[school]} key={school}/>
          ))}
        <View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  schoolList: getSchoolList(state),
  isLoading: isLoading(state),
});

const mapDispatchToProps = {
  fetchSchools,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SchoolList);
