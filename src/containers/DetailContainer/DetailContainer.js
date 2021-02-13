import React, { Component } from 'react';
import {Container, Segment, Loader} from "semantic-ui-react";
import { getCountryDetailByCode } from "../../services/api";
import CountryCardDetail from '../../components/CountryCardDetail';

class DetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryDetail:{},
            countryCode:props.match.params.code,
            loading:false
        }
    }

    componentDidMount = async () => {
        this.toggleLoading();
        let apiResponse = await getCountryDetailByCode(this.state.countryCode);
        this.setState(state=>{
            state.countryDetail = apiResponse.data;
            return state;
        })
        this.toggleLoading();
    };

    toggleLoading = ()=>{
        this.setState(state=>{
            state.loading = !state.loading;
            return state;
        })
    }

    render = () => {
        return (
            <div>
                <Container>
                    <Segment>
                        {
                            this.state.loading ?
                                <Loader  active={this.state.loading} inline='centered' /> :
                                <CountryCardDetail
                                    countryDetail={this.state.countryDetail}
                                    countryCode={this.state.countryCode}
                                />
                        }

                    </Segment>
                </Container>
            </div>
        );
    };
}

export default DetailContainer;
