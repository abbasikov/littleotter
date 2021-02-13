import React, { Component } from 'react';
import { CountryList } from '../../components/CountryList';
import {Divider, Pagination, Header, Dropdown, Loader} from "semantic-ui-react";
import { CONTINENTS } from "../../constants/AppConstants";
import { getCountriesByContinentCode }  from '../../services/api';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countriesByContinent:[],
            page:1,
            limit:20,
            total:0,
            selectedContinent:'',
            loading:false
        }
    }

    toggleLoading = ()=>{
        this.setState(state=>{
            state.loading = !state.loading;
            return state;
        });
    }

    setApiResponse = (apiResponse,val) => {
        this.setState(state=>{
            state.countriesByContinent = apiResponse.data;
            state.page = apiResponse.meta.page;
            state.limit = apiResponse.meta.limit;
            state.total = apiResponse.meta.total;
            state.selectedContinent = val;
            return state;
        });
    }

    onChangeContinent =  async (e,data)=>{
        this.toggleLoading();
        let apiResponse =  await getCountriesByContinentCode(data.value,1);
        this.toggleLoading();
        this.setApiResponse(apiResponse, data.value);
    }

    onPageChange = async (e, data) => {
        this.toggleLoading();
        let apiResponse = await getCountriesByContinentCode(this.state.selectedContinent,data.activePage);
        this.toggleLoading();
        this.setApiResponse(apiResponse, data.value);
    }

    onCountryChange = (e,data) => {
        this.props.history.push(data.value.toLowerCase());
    }

    render = () => {
        return (
            <div style={{margin:'50px 50px 50px 50px'}}>
                <Header as='h2'  textAlign='center'>
                    <Header.Content>Little Otter Assignment</Header.Content>
                </Header>

                <Dropdown onChange={this.onChangeContinent} placeholder='Select Continent' selection options={CONTINENTS} />
                <Dropdown disabled={!this.state.countriesByContinent.length>0} onChange={this.onCountryChange} placeholder='Select Country' selection options={this.state.countriesByContinent} />
                <Divider hidden={!this.state.countriesByContinent.length>0}/>
                {
                    this.state.loading ?
                        <Loader  active={this.state.loading} inline='centered' /> :
                        <CountryList countries={this.state.countriesByContinent}/>
                }
                <Divider hidden={!this.state.countriesByContinent.length>0}/>
                {
                    this.state.countriesByContinent.length>0 ?
                        <Pagination
                            onPageChange={this.onPageChange}
                            firstItem={null}
                            lastItem={null}
                            defaultActivePage={1}
                            siblingRange={1}
                            totalPages={Math.ceil(this.state.total/this.state.limit)}
                        />:null
                }

            </div>
        );
    };
}

export default HomeContainer;
