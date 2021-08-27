export interface ReqResListado {
    status:      number;
    description: string;
    objModel:    Usuario[];
}

export interface Usuario {
    id:               number;
    idUser:           number;
    creationDate:     Date;
    observation:      null;
    status:           number;
    modificationDate: Date;
    boolMigration:    number;
    nextExpiration:   Date;
    packageDetailId:  number;
    idPackage:        number;
    lastPaymentDate:  Date;
    packageDetail:    PackageDetail;
    nextPayment:      null;
    schedule:         null;
    userResponseDto:  UserResponseDto;
}

export interface PackageDetail {
    idPackageDetail:      number;
    packageId:            number;
    monthsDuration:       number;
    price:                number;
    numberQuotas:         number;
    initialPrice:         number;
    quotaPrice:           number;
    volume:               number;
    numberInitialQuote:   number;
    packageDetailGroupId: number;
    comission:            number;
    numberShares:         number;
    package:              Package;
    packageDetailGroup:   null;
}

export interface Package {
    id:                 number;
    name:               string;
    codeMembership:     string;
    description:        string;
    idFamilyPackage:    number;
    estatus:            number;
    legalDocuments:     null;
    listPackageDetails: null;
}

export interface UserResponseDto {
    documentType:           null;
    flyer:                  null;
    stateName:              State;
    rangeCompuestoName:     null;
    rangeCompuestoPosition: number;
    nationality:            null;
    countryResidence:       null;
    nameSponsor:            string;
    lastnameSponsor:        string;
    stateText:              State;
    password:               null;
    id:                     number;
    createDate:             Date;
    idState:                number;
    name:                   string;
    lastname:               string;
    birthdate:              Date;
    gender:                 Gender;
    idNationality:          number;
    idDocument:             number;
    nroDocument:            string;
    civilState:             string;
    email:                  string;
    idResidenceCountry:     number;
    districtAddress:        string;
    address:                string;
    username:               string;
    nroTelf:                string;
    boolDelete:             number;
    otherDocument:          null;
    profilePicture:         null;
    code:                   string;
}

export enum Gender {
    F = "F",
    M = "M",
}

export enum State {
    PendienteDeValidaciónCuota = "Pendiente de validación Cuota",
}
