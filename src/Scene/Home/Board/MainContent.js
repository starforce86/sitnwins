import React from 'react';
import EventStack from '../Components/EventStack';
import InfoPanel from '../Components/InfoPanel';
import DepositPanel from '../Components/DepositPanel';
import WelcomePanel from '../Components/WelcomePanel';
import ContestBar from '../Components/ContestBar';
import SearchPad from '../Components/SearchPad';
import DataTable from '../Components/DataTable';
import { Carousel, CarouselInner, CarouselItem, View } from "mdbreact";

const MainContent = props => (

    <div class="container pr-0 h-100" style={{position: 'relative'}}>
            <div class="side-menu h-100" id="style-narrow">
                <EventStack />
            </div>
            <div class="main-wrap">
                <div>
                <div class="row mx-0 px-0 w-100">
                    <Carousel activeItem={1} slide={true} length={3} showControls={false} showIndicators={true} className="container mx-0 px-0">
                        <CarouselInner>
                            <CarouselItem itemId="1">
                                <View>
                                <InfoPanel/>
                                </View>
                            </CarouselItem>
                            <CarouselItem itemId="2">
                                <View>
                                <DepositPanel />
                                </View>
                            </CarouselItem>
                            <CarouselItem itemId="3">
                                <View>
                                <WelcomePanel />
                                </View>
                            </CarouselItem>
                        </CarouselInner>
                    </Carousel>
                </div>

                <ContestBar />

                <div class="row mx-0 px-0 h-100">
                    <div class="col mx-0 px-0 h-100" style={{background: "#2b2a2c"}}>
                        <SearchPad />
                    </div>
                    <div class="col-auto mx-0 px-0 h-100" style={{background: "#2b2a2c"}}>
                        <DataTable />
                    </div>
                </div>
                </div>
                
            </div>
    </div>
)

export default MainContent;
