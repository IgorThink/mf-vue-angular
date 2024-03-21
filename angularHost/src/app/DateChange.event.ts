export class dateChangedEvent extends CustomEvent<any> {
  constructor(public eventName: string, public options?: Record<string, any>) {
    super(eventName, options)
  }
}