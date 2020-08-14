import { format } from 'date-fns';

export declare type ScmDomain = 'product' | 'category';

export declare type ActionMode = 'create' | 'read' | 'edit';

export class SharedUtil {
  static getCurrentDate() {
    return format(new Date(), 'YYYY-MM-DD');
  }

  static getCurrentDateTime() {
    return format(new Date(), 'YYYY-MM-DD HH:mm:ss');
  }
}
