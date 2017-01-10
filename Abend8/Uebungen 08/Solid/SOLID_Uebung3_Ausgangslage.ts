class CookiePersitanceService {
    save(entity: any): number {
        var id = Math.floor((Math.random() * 100) + 1);
        // Cookie persistance logic...
        return id;
    }
}

class FavouritesController {
    private _persistanceService: CookiePersitanceService;
    constructor() {
        this._persistanceService = new CookiePersitanceService();
    }
    public saveAsFavourite(articleId: number) {
        return this._persistanceService.save(articleId);
    }
}

var favController = new FavouritesController();