class BTS {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  contains(value) {
    if (value === this.value) {
      return true;
    }
    if (value < this.value) {
      return this.left ? this.left.contains(value) : false;
    }

    if (value > this.value) {
      return this.right ? this.right.contains(value) : false;
    }
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BTS(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BTS(value);
      }
    }
  }

  getMin() {
    return this.left ? this.left.getMin() : this.value;
  }

  remove(value) {
    if (value < this.value) {
      this.left = this.left?.remove(value); 
    } else if (value > this.value) {
      this.right = this.right?.remove(value); 
    } else {
        if (this.left == null) 
        {
          return this.right;
        } 
        else if (this.right == null) 
        { 
          return this.left;
        } 
  
        const minValue = this.right.getMin(); 
  
        this.value = minValue; 
  
        this.right = this.right.remove(minValue); 
    } 
    return this;
  }
}

export default BTS;