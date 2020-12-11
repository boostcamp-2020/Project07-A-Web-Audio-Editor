import { Command } from '@command';
import { storeChannel } from '@store'
import { StoreChannelType } from '@types'

class CommandManager {
  public undoList: Command[];
  public redoList: Command[];

  constructor() {
    this.undoList = []
    this.redoList = []
  }

  execute(command: Command) {
    command.execute();
    this.undoList.push(command);
    this.redoList = [];
    storeChannel.publish(StoreChannelType.EDIT_TOOLS_CHANNEL, null);
  }

  undo() {
    if (this.undoList.length > 0) {
      const command: Command | undefined = this.undoList.pop();
      if (command) {
        this.redoList.push(command);
        command.undo();
        storeChannel.publish(StoreChannelType.EDIT_TOOLS_CHANNEL, null);
      }
    }
  }

  redo() {
    if (this.redoList.length > 0) {
      const command: Command | undefined = this.redoList.pop();
      if (command) {
        this.undoList.push(command);
        command.execute();
        storeChannel.publish(StoreChannelType.EDIT_TOOLS_CHANNEL, null);
      }
    }
  }

}

export default new CommandManager();
