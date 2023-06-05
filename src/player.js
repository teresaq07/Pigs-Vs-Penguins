class Player {
    name = "";
    alive = true; // OLD - status
    xp = 0;
    level = 1;
    maxHitPoints = 1;
    currentHitPoints = 1;
	damagePoints = 0;

	getName() {
		return this.name;
	}

	setName (n) {
		this.name = n;
	}

	isAlive () {
		return this.alive;
	}

    setAlive(a) {
        this.alive = a;
    }

    setExperience(e) {
		this.xp = e;
	}

    getExpirience() {
		return this.xp;
	}

	getLevel() {
		return this.level;
	}

    /*
	private void setLevel() {
		if (exp >= 0 && exp <= 199) {
			this.level = 1;
		}
		else if (exp >= 200 && exp <= 299) {
			this.level = 2;
		}
		else if (exp >= 300 && exp <= 399) {
			this.level = 3;
		}
		else if (exp >= 400 && exp <= 499) {
			this.level = 4;
		}
		else if (exp >= 500 && exp <= 599) {
			this.level = 5;
		} else {
			this.level = 6;
		}
	}
    

	public int getCurrentHitPoints() {
		return currentHitPoints;
	}

	public int getMaxHitPoints() {
		return maxHitPoints;
	}
	
	private void setMaxHitPoints() { 
		this.maxHitPoints = (int) (level * 100 * (1 + level / 10.0));
	 }
	

	public int getDamagePoints() {
		return damagePoints;
	}
	
	private void setDamagePoints() { 
		this.damagePoints = level * 30;
	}
	*/

	public void battle(Player player) {
		player.currentHitPoints -= this.damagePoints;
		this.currentHitPoints -= player.damagePoints;
		player.exp += 50;
		this.exp += 50;
		this.setLevel();
		this.setMaxHitPoints();
		this.setDamagePoints();
		this.setStatus();
		player.setLevel();
		player.setMaxHitPoints();
		player.setDamagePoints();
		player.setStatus();
	}

	public Player(String name, int exp, int currentHitPoints) {
		super();
		this.name = name;
		this.exp = exp;
		
		
		setLevel();
		setMaxHitPoints();
		
		
		setDamagePoints();
		
		if (currentHitPoints > maxHitPoints) {
			this.currentHitPoints = maxHitPoints;
		} else { 
			this.currentHitPoints = currentHitPoints; 
		}
		
		setStatus();	
	}

	toString() {
		return "PlayerClass [name=" + name + ", status=" + status + ", expirience=" + exp + ", level=" + level
				+ ", currentHitPoints=" + currentHitPoints + ", maxHitPoints=" + maxHitPoints + ", damagePoints="
				+ damagePoints + "]";
	}

}

