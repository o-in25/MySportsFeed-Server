// the schema manager is a collection of schemas
// i.e. pojos
// that will be used to create instances of models
// in their implementation
// this are simple pojos and are used in
// conjunction with mongoose.Schema
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * Player stats schema
 */
let PlayerStatsManager = {
    // the schema that will be used in the db
    PlayerStatsSchema: {
        PlayerID: Number,
        LastName: String,
        FirstName: String,
        JerseyNumber: String,
        Position: String,
        CityID: Number,
        City: String,
        Name: String,
        Abbreviation: String,
        GamesPlayed: Number,
        Fg2PtAtt: Number,
        Fg2PtAttPerGame: Number,
        Fg2PtMade: Number,
        Fg2PtMadePerGame: Number,
        Fg2PtPct: Number,
        Fg3PtAtt: Number,
        Fg3PtAttPerGame: Number,
        Fg3PtMade: Number,
        Fg3PtMadePerGame: Number,
        Fg3PtPct: Number,
        FgAtt: Number,
        FgAttPerGame: Number,
        FgMade: Number,
        FgMadePerGame: Number,
        FgPct: Number,
        FtAtt: Number,
        FtAttPerGame: Number,
        FtMade: Number,
        FtMadePerGame: Number,
        FtPct: Number,
        OffReb: Number,
        OffRebPerGame: Number,
        DefReb: Number,
        DefRebPerGame: Number,
        Reb: Number,
        RebPerGame: Number,
        Ast: Number,
        AstPerGame: Number,
        Pts: Number,
        PtsPerGame: Number,
        Tov: Number,
        TovPerGame: Number,
        Stl: Number,
        StlPerGame: Number,
        Blk: Number,
        BlkPerGame: Number,
        BlkAgainst: Number,
        BlkAgainstPerGame: Number,
        Fouls: Number,
        FoulsPerGame: Number,
        FoulsDrawn: Number,
        FoulsDrawnPerGame: Number,
        FoulPers: Number,
        FoulPersPerGame: Number,
        FoulPersDrawn: Number,
        FoulPersDrawnPerGame: Number,
        FoulTech: Number,
        FoulTechPerGame: Number,
        FoulTechDrawn: Number,
        FoulTechDrawnPerGame: Number,
        FoulFlag1: Number,
        FoulFlag1PerGame: Number,
        FoulFlag1Drawn: Number,
        FoulFlag1DrawnPerGame: Number,
        FoulFlag2: Number,
        FoulFlag2PerGame: Number,
        FoulFlag2Drawn: Number,
        FoulFlag2DrawnPerGame: Number,
        Ejections: Number,
        PlusMinus: Number,
        PlusMinusPerGame: Number,
        MinSeconds: Number,
        MinSecondsPerGame: Number
    },
    // since our our http response does not match
    // what we will be inserting into the db, we have
    // to describe it via a dao
    PlayerStatsDao: function(player) {
        return {
            PlayerID: Number(player.player.ID),
            LastName: player.player.LastName,
            FirstName: player.player.FirstName,
            JerseyNumber: player.player.JerseyNumber,
            Position: player.player.Position,
            CityID: Number(player.team.ID),
            City: player.team.City,
            Name: player.team.Name,
            Abbreviation: player.team.Abbreviation,
            GamesPlayed: Number(player.stats.GamesPlayed.text),
            Fg2PtAtt: Number(player.stats.Fg2PtAtt.text),
            Fg2PtAttPerGame: Number(player.stats.Fg2PtAttPerGame.text),
            Fg2PtMade: Number(player.stats.Fg2PtMade.text),
            Fg2PtMadePerGame: Number(player.stats.Fg2PtMadePerGame.text),
            Fg2PtPct: Number(player.stats.Fg2PtPct.text),
            Fg3PtAtt: Number(player.stats.Fg3PtAtt.text),
            Fg3PtAttPerGame: Number(player.stats.Fg3PtAttPerGame.text),
            Fg3PtMade: Number(player.stats.Fg3PtMade.text),
            Fg3PtMadePerGame: Number(player.stats.Fg3PtMadePerGame.text),
            Fg3PtPct: Number(player.stats.Fg3PtPct.text),
            FgAtt: Number(player.stats.FgAtt.text),
            FgAttPerGame: Number(player.stats.FgAttPerGame.text),
            FgMade: Number(player.stats.FgMade.text),
            FgMadePerGame: Number(player.stats.FgMadePerGame.text),
            FgPct: Number(player.stats.FgPct.text),
            FtAtt: Number(player.stats.FtAtt.text),
            FtAttPerGame: Number(player.stats.FtAttPerGame.text),
            FtMade: Number(player.stats.FtMade.text),
            FtMadePerGame: Number(player.stats.FtMadePerGame.text),
            FtPct: Number(player.stats.FtPct.text),
            OffReb: Number(player.stats.OffReb.text),
            OffRebPerGame: Number(player.stats.OffRebPerGame.text),
            DefReb: Number(player.stats.DefReb.text),
            DefRebPerGame: Number(player.stats.DefRebPerGame.text),
            Reb: Number(player.stats.Reb.text),
            RebPerGame: Number(player.stats.RebPerGame.text),
            Ast: Number(player.stats.Ast.text),
            AstPerGame: Number(player.stats.AstPerGame.text),
            Pts: Number(player.stats.Pts.text),
            PtsPerGame: Number(player.stats.PtsPerGame.text),
            Tov: Number(player.stats.Tov.text),
            TovPerGame: Number(player.stats.TovPerGame.text),
            Stl: Number(player.stats.Stl.text),
            StlPerGame: Number(player.stats.StlPerGame.text),
            Blk: Number(player.stats.Blk.text),
            BlkPerGame: Number(player.stats.BlkPerGame.text),
            BlkAgainst: Number(player.stats.BlkAgainst.text),
            BlkAgainstPerGame: Number(player.stats.BlkAgainstPerGame.text),
            Fouls: Number(player.stats.Fouls.text),
            FoulsPerGame: Number(player.stats.FoulsPerGame.text),
            FoulsDrawn: Number(player.stats.FoulsDrawn.text),
            FoulsDrawnPerGame: Number(player.stats.FoulsDrawnPerGame.text),
            FoulPers: Number(player.stats.FoulPers.text),
            FoulPersPerGame: Number(player.stats.FoulPersPerGame.text),
            FoulPersDrawn: Number(player.stats.FoulPersDrawn.text),
            FoulPersDrawnPerGame: Number(player.stats.FoulPersDrawnPerGame.text),
            FoulTech: Number(player.stats.FoulTech.text),
            FoulTechPerGame: Number(player.stats.FoulTechPerGame.text),
            FoulTechDrawn: Number(player.stats.FoulTechDrawn.text),
            FoulTechDrawnPerGame: Number(player.stats.FoulTechDrawnPerGame.text),
            FoulFlag1: Number(player.stats.FoulFlag1.text),
            FoulFlag1PerGame: Number(player.stats.FoulFlag1PerGame.text),
            FoulFlag1Drawn: Number(player.stats.FoulFlag1Drawn.text),
            FoulFlag1DrawnPerGame: Number(player.stats.FoulFlag1DrawnPerGame.text),
            FoulFlag2: Number(player.stats.FoulFlag2.text),
            FoulFlag2PerGame: Number(player.stats.FoulFlag2PerGame.text),
            FoulFlag2Drawn: Number(player.stats.FoulFlag2Drawn.text),
            FoulFlag2DrawnPerGame: Number(player.stats.FoulFlag2DrawnPerGame.text),
            Ejections: Number(player.stats.Ejections.text),
            PlusMinus: Number(player.stats.PlusMinus.text),
            PlusMinusPerGame: Number(player.stats.PlusMinusPerGame.text),
            MinSeconds: Number(player.stats.MinSeconds.text),
            MinSecondsPerGame: Number(player.stats.MinSecondsPerGame.text)
        }
    },
};

/**
 * Player profile schema
 */
let PlayerProfileManager = {
    PlayerProfileSchema: {
        ID: Number,
        LastName: String,
        FirstName: String,
        JerseyNumber: String,
        Position: String,
        Height: Number,
        Weight: Number,
        BirthDate: String,
        Age: Number,
        BirthCity: String,
        BirthCountry: String,
        IsRookie: Boolean,
        HighSchool: String,
        College: String,
        Twitter: String,
        rosterStatus: String,
        handedness: String,
        DraftYear: String,
        DraftID: Number,
        DraftCity: String,
        DraftName: String,
        DraftAbbreviation: String,
        Round: Number,
        RoundPick: Number,
        OverallPick: Number,
        ContractSeasonStartYear: String,
        ContractBaseSalary: Number,
        ContractMinorsSalary: Number,
        ContractSigningBonus: Number,
        ContractOtherBonuses: Number,
        ContractCapHit: Boolean,
        ContractFullNoTradeClause: Boolean,
        ContractModifiedNoTradeClause: Boolean,
        ContractNoMovementClause: Boolean,
        ContractTeamID: Number,
        ContractCity: String,
        ContractName: String,
        ContractAbbreviation: String,
        SignedOn: String,
        TotalYears: Number,
        TotalSalary: Number,
        TotalBonuses: Number,
        ExpiryStatus: Number,
        AnnualAverageSalary: Number,
        OfficialImageSrc: String,
        ExternalMappingSource: String,
        ExternalMappingID: String,
        TeamID: Number,
        TeamCity: String,
        TeamName: String,
        TeamAbbreviation: String
    },
    // TODO MAKE THE DAO
    PlayerProfileDao: function(player) {
        return {
            ID: player.player.ID,
            LastName: player.player.LastName,
            FirstName: player.player.FirstName,
            JerseyNumber: Number(player.player.JerseyNumber),
            Position: player.player.Position,
            Height:player.player.Height,
            Weight: Number(player.player.Weight),
            BirthDate: player.player.BirthDate,
            Age: Number(player.player.Age),
            BirthCity: player.player.BirthCity,
            BirthCountry: player.player.BirthCountry,
            IsRookie: Boolean(player.player.IsRookie),
            HighSchool: player.player.HighSchool,
            College: player.player.College,
            Twitter: player.player.Twitter,
            rosterStatus: player.player.rosterStatus,
            handedness: player.player.handedness,
            DraftYear: player.player.draft.year,
            DraftID: Number(player.player.draft.ID),
            DraftCity: player.player.draft.team.City,
            DraftName: player.player.draft.team.Name,
            DraftAbbreviation: player.player.draft.team.Abbreviation,
            Round: player.player.draft.Round,
            RoundPick: player.player.draft.RoundPick,
            OverallPick: player.player.draft.OverallPick,
            ContractSeasonStartYear: !player.player.hasOwnProperty('currentContractYear')?  player.player.currentContractYear.SeasonStartYear : 'N/A',
            ContractBaseSalary: Number(player.player.currentContractYear.ContractBaseSalary),
            ContractMinorsSalary: Number(player.player.currentContractYear.ContractMinorsSalary),
            ContractSigningBonus: Number(player.player.currentContractYear.ContractSigningBonus),
            ContractOtherBonuses: Number(player.player.currentContractYear.ContractOtherBonuses),
            ContractCapHit: Number(player.player.currentContractYear.ContractOtherBonuses),
            ContractFullNoTradeClause: Boolean(player.player.currentContractYear.ContractFullNoTradeClause),
            ContractModifiedNoTradeClause: Boolean(player.player.currentContractYear.ContractNoMovementClause),
            ContractNoMovementClause: Boolean(player.player.currentContractYear.ContractNoMovementClause),
            ContractTeamID: Number(player.player.currentContractYear.overallContract.signingTeam.ContractTeamID),
            ContractCity: player.player.currentContractYear.overallContract.signingTeam.ID,
            ContractName: player.player.currentContractYear.overallContract.signingTeam.City,
            ContractAbbreviation: player.player.currentContractYear.overallContract.signingTeam.Name,
            SignedOn: player.player.currentContractYear.overallContract.SignedOn,
            TotalYears: Number(player.player.currentContractYear.TotalYears),
            TotalSalary: Number(player.player.currentContractYear.TotalSalary),
            TotalBonuses: Number(player.player.currentContractYear.TotalBonuses),
            ExpiryStatus: player.player.currentContractYear.ExpiryStatus,
            AnnualAverageSalary: Number(player.player.currentContractYear.AnnualAverageSalary),
            OfficialImageSrc: player.player.officialImageSrc,
            ExternalMappingSource: player.player.externalMapping.Source,
            ExternalMappingID: player.player.externalMapping.ID,
            TeamID: player.team.ID,
            TeamCity: player.team.City,
            TeamName: player.team.Name,
            TeamAbbreviation: player.team.Abbreviation
        }
    }
};

// return...
module.exports = {
    PlayerStatsManager: PlayerStatsManager,
    PlayerProfileManager: PlayerProfileManager
};