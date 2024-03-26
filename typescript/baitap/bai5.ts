class FootballPlayer {
    private name: string; 
    private position: string;
    private goalsScored: number;
    constructor(name: string, position: string, goalsScored: number){
        this.name = name;
        this.position = position;
        this.goalsScored = goalsScored;
    }
    public getGoalsScored(): number {
        return this.goalsScored;
    }
}

class FootballTeam {
    private players: FootballPlayer[];
    constructor(players: FootballPlayer[]){
        this.players = players;
    }
    public calculateTotalGoals(): number{
        const totalGoals = this.players.reduce((total, player) => {
            return total + player.getGoalsScored(); 
        }, 0);
        return totalGoals; 
    }
}

const manUnited = new FootballTeam([
    new FootballPlayer('Dung','Tien dao',100),
    new FootballPlayer('Truong','Tien dao',100)
]);
