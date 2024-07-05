import { Injectable } from '@angular/core';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { BehaviorSubject } from 'rxjs';
import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userPool: CognitoUserPool;
  isLoggedIn = new BehaviorSubject(false);
  constructor() {
    const poolData = {
      UserPoolId: 'us-east-2_P5Ld2Jxfg', // us-east-2_P5Ld2Jxfg
      ClientId: '2hib60a0dmhhbsvuosugaoug14' // 2hib60a0dmhhbsvuosugaoug14
    };

    this.userPool = new CognitoUserPool(poolData);
  }

  signUp(username: string, password: string, email: string): Promise<any> {
    const attributeList = [
      new CognitoUserAttribute({ Name: 'email', Value: email })
    ];

    return new Promise((resolve, reject) => {
      this.userPool.signUp(username, password, attributeList, [], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  signIn(username: string, password: string): Promise<any> {
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password
    });

    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: this.userPool
    });

    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => resolve(result),
        onFailure: (err) => reject(err)
      });
    });
  }

  // ログイン処理
  login(username: string, password: string): Promise<any> {
    const userData = {
      Username: username,
      Pool: this.userPool,
      Storage: localStorage
    };
    const cognitoUser = new CognitoUser(userData);
    const authenticationData = {
      Username: username,
      Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          const accessToken = result.getAccessToken().getJwtToken();
          resolve(accessToken);
        },
        onFailure: (err) => {
          reject(err);
        },
        // newPasswordRequired(userAttributes, requiredAttributes) {
        //   //delete userAttributes.email_verified;
        //   //delete userAttributes.phone_number_verified;
        //   cognitoUser.completeNewPasswordChallenge('adminadmin', {}, this);
        // }
      });
    });
  }

  // ログイン済確認処理
  isAuthenticated(): Promise<any> {
    const cognitoUser = this.userPool.getCurrentUser();
    return new Promise((resolve, reject) => {
      if (cognitoUser === null) {
        resolve(false);
      }
      cognitoUser!.getSession((err: any, session: { isValid: () => any; }) => {
        if (err) {
          reject(err);
        } else {
          if (!session.isValid()) {
            reject(session);
          } else {
            resolve(session);
          }
        }
      });
    });
  }

  // IDトークン取得処理
  getCurrentUserIdToken(): any {
    const cognitoUser = this.userPool.getCurrentUser();
    if (cognitoUser != null) {
      return cognitoUser.getSession((err:any, session:any) => {
        if (err) {
          alert(err);
          return;
        } else {
          return session.idToken.jwtToken;
        }
      });
    }
  }

  // アクセストークン取得処理
  getCurrentAccessToken(): any {
    const cognitoUser = this.userPool.getCurrentUser();
    if (cognitoUser != null) {
      return cognitoUser.getSession((err:any, session:any) => {
        if (err) {
          alert(err);
          return;
        } else {
          return session.accessToken.jwtToken;
        }
      });
    }
  }

  // パスワード変更処理
  async changePassword(oldPw: string, newPw: string) {
    const cognitoUser = this.userPool.getCurrentUser();
    return new Promise<any>((resolve, err) => {
      cognitoUser!.getSession(() => {
        cognitoUser!.changePassword(oldPw, newPw, (error, result) => {
          resolve({ result, error });
        });
      });
    });
  }

  // ログアウト処理
  logout() {
    console.log('LogOut!');
    const currentUser = this.userPool.getCurrentUser();
    if (currentUser) {
      currentUser.signOut();
    }
  }
}