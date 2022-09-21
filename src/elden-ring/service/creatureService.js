class CreatureService {
    creaturesUrl = "https://eldenring.fanapis.com/api/creatures";

    async getCreatures() {
        try {
            const response = await fetch(this.creaturesUrl);
            if (!response.ok) throw new Error(response.statusText);
            const data = await response.json();

            return data.data;
            } catch (e) {
                console.error(e);

                return []
            }
       
       
    }

}

export default CreatureService;