// import React, {useEffect} from "react";
// import {PageWithPermission, Permission, WithPermission} from "../../../../auth/AuthorizationSupport";
// import {Link} from "react-router-dom";
// import {useHistory} from "react-router";
// import {isSuccess} from "../../../../reducers/networkStateReducer";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {useFindAllSelfDeliveryZones} from "../../../../reducers/merchant/findAllDeliveryZones";
// import {faEdit} from "@fortawesome/free-solid-svg-icons";
// import {MerchantDeliveryConfig, ZoneConfig} from "../../../../reducers/merchant/types";
// import {parsedWidgetSearchQueryParams} from "../../../../reducers/widget";
// import {ZONE_PAGE_SIZE} from "../consts";
// import {Pagination} from "../../commons/Pagination";
// import {useZoneSearchQuery} from "../../../../reducers/merchant";

// export default function MerchantDelivery() {

//     const [zones, getZoneList, reset] = useFindAllSelfDeliveryZones()
//     const {push} = useHistory()
//     const [query, update] = useZoneSearchQuery()

//     useEffect(() => {
//         getZoneList()
//     }, [])

//     useEffect(() => {
//         return reset
//     },[])

//     useEffect(() => {
//         if(query.page == null || query.size == null) {
//             push(update({
//                 req: {} as ZoneConfig,
//                 size: query.size ?? ZONE_PAGE_SIZE,
//                 page: query.page ?? 0
//             }))
//         }
//     },[window.location.href])

//     function link(pageVal: number) {
//         return update({
//             ...query,
//             page: pageVal
//         })
//     }

//     return <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
//         <div className="card border-0">
//             <div className="card-body">
//                 <div className="row">
//                     <div className="col-sm-11">
//                         <h5 className="font-weight-bold">Custom Shipping Rate</h5>
//                         <span style={{fontSize:"1.25em"}}>Create shipping zones to add custom rates. Please note the customers will not be able place a
//                             delivery order if the intended city is not included in any of the profiles. </span>
//                     </div>
//                     <div className="col-sm-1">
//                         <label className="switch mt-3">
//                             <input type="checkbox"/>
//                                 <span className="slider round"></span>
//                         </label>
//                     </div>
//                 </div>
//                 <hr/>

//                 <div className="row">
//                     <div className="col-lg-7 mb-3">
//                         <div className="row">
//                             <div className="col-sm-12">
//                                 <h5 className="font-weight-bold">Shipping Zone</h5>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-5">
//                         <div className="row justify-content-end">
//                             <div className="col-sm-6">
//                                 <WithPermission permission={Permission.UPDATE_ZONE_MANAGEMENT}>
//                                     <Link to={"/delivery/zone-management/merchant-delivery/add"}
//                                           className={"btn btn-primary w-100 font-weight-bold mb-sm-0 mb-2"}>
//                                           Create Shipping Zone
//                                     </Link>
//                                 </WithPermission>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="zone-list mt-3">
//                     <div className="accordion" id="accordion">
//                         <div className="card border-0">
//                             <div className="card-header p-0" id="headingOne">
//                 {/*                <h5 className="mb-0">*/}
//                 {/*                    <button className="btn btn-link w-100 text-left" data-toggle="collapse"*/}
//                 {/*                            data-target="#collapseOne" aria-expanded="false"*/}
//                 {/*                            aria-controls="collapseOne">*/}
//                 {/*                        Zone A*/}
//                 {/*                    </button>*/}
//                 {/*                </h5>*/}
//                 {/*                <div id="collapseOne" className="collapse" aria-labelledby="headingOne"*/}
//                 {/*                     data-parent="#accordion">*/}
//                 {/*                    <div className="card border-0">*/}
//                 {/*                        <div className="card-body">*/}
//                 {/*                            <div className="row city-list m-auto justify-content-between">*/}
//                 {/*                                <div className="col-sm-10 m-auto">*/}
//                 {/*                                    Colombo 01, Colombo 02, Colombo 03, Colombo 04, Colombo 05*/}
//                 {/*                                </div>*/}
//                 {/*                                <div className="col-sm-2 text-right">*/}
//                 {/*                                    <a className="btn" href=""><i className="fas fa-edit"></i></a>*/}
//                 {/*                                    <a type="btn" data-toggle="modal" data-target="#discardCenter"*/}
//                 {/*                                       className="btn"><i className="fas fa-trash-alt"></i></a>*/}
//                 {/*                                </div>*/}
//                 {/*                            </div>*/}
//                 {/*                            <div className="zone-details col-md-8">*/}
//                 {/*                                <div className="row mt-2">*/}
//                 {/*                                    <div className="col-6">*/}
//                 {/*                                        <p className="font-weight-bold">Minimum Order Value</p>*/}
//                 {/*                                    </div>*/}
//                 {/*                                    <div className="col-6 text-right">*/}
//                 {/*                                        <p className="">500</p>*/}
//                 {/*                                    </div>*/}
//                 {/*                                </div>*/}
//                 {/*                                <div className="row">*/}
//                 {/*                                    <div className="col-6">*/}
//                 {/*                                        <p className="font-weight-bold">Delivery Rate</p>*/}
//                 {/*                                    </div>*/}
//                 {/*                                    <div className="col-6 text-right">*/}
//                 {/*                                        <p className="">LKR. 150.00</p>*/}
//                 {/*                                    </div>*/}
//                 {/*                                </div>*/}
//                 {/*                                <div className="row">*/}
//                 {/*                                    <div className="col-6">*/}
//                 {/*                                        <p className="font-weight-bold">Delivery Estimation</p>*/}
//                 {/*                                    </div>*/}
//                 {/*                                    <div className="col-6 text-right">*/}
//                 {/*                                        <p className="">5 days</p>*/}
//                 {/*                                    </div>*/}
//                 {/*                                </div>*/}
//                 {/*                                <div className="row">*/}
//                 {/*                                    <div className="col-6">*/}
//                 {/*                                        <p className="font-weight-bold">Waive off delivery cost if order*/}
//                 {/*                                            value is higher than</p>*/}
//                 {/*                                    </div>*/}
//                 {/*                                    <div className="col-6 text-right">*/}
//                 {/*                                        <p className="">LKR. 2000.00</p>*/}
//                 {/*                                    </div>*/}
//                 {/*                                </div>*/}
//                 {/*                            </div>*/}
//                 {/*                        </div>*/}
//                 {/*                    </div>*/}
//                 {/*                </div>*/}
//                                 {isSuccess(zones) ? zones.data.merchantId.length > 0 :
//                                     <div className="table-responsive border-0 p-0 shadow-none">
//                                         <table className="table table-borderless">
//                                             <tbody>
//                                             {isSuccess(zones) && zones && zones.data &&
//                                             zones.data.zoneConfig?.keys().map((item: MerchantDeliveryConfig) => {
//                                                 return <tr>
//                                                     <td></td>
//                                                     <td>{item.merchantId}</td>
//                                                     <td className="table-actions">
//                                                         <>
//                                                             <Link
//                                                                 to={`/delivery/zone-management/merchant-delivery/edit/${item.merchantId}`}
//                                                                 className="btn"><FontAwesomeIcon icon={faEdit}/></Link>
//                                                          </>
//                                                     </td>
//                                                 </tr>
//                                             }) }: <> </>
//                                             </tbody>
//                                         </table>
//                                     </div> }: <>
//                                     </>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//             {/*<Pagination*/}
//             {/*    parseQueryFunc={parsedZoneSearchQueryParams}*/}
//             {/*    link={link}*/}
//             {/*    items={zones}*/}
//             {/*    retrievedItems={isSuccess(zones) ? zones.data.merchantId.length : 0}*/}
//             {/*    totalItems={isSuccess(zones) ? zones.data.merchantId.total :0}*/}
//             {/*    pageSize={ZONE_PAGE_SIZE}*/}
//             {/*    currentPage={query.page}*/}
//             {/*/>*/}
//             </div>
//         </div>
// }
