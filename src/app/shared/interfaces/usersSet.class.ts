export class UsersSet<T> {
    private users: T[] = [];
    private getKey: (user: T) => string;
  
    constructor(getKey: (user: T) => string) {
      this.getKey = getKey;
    }
  
    add(user: T): void {
      const key = this.getKey(user);
      if (!this.users.some((existing) => this.getKey(existing) === key)) {
        this.users.push(user);
      }
    }
  
    has(user: T): boolean {
      return this.users.some(
        (existing) => this.getKey(existing) === this.getKey(user)
      );
    }
  
    values(): T[] {
      return [...this.users];
    }
  }