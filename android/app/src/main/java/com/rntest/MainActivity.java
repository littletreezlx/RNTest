package com.rntest;

import android.content.Context;
import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.util.AttributeSet;
import android.view.View;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentActivity;
import com.facebook.react.ReactFragment;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;

public class MainActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {

//    @Override
//    void onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        setContentView(R.layout.activity_rn)
////        val fragment = ReactFragment.Builder()
////            .setComponentName("App")
////            .setLaunchOptions(getLaunchOptions("test message"))
////            .build()
////        supportFragmentManager
////            .beginTransaction()
////            .add(R.id.reactNativeFragment, fragment)
////            .commit()
//    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_rn);
        //navigation
//        ReactFragment fragment = new ReactFragment.Builder()
//            .setComponentName("NestedPage")
//            .setLaunchOptions(getLaunchOptions("NestedB"))
//            .build();
        ReactFragment fragment = new ReactFragment.Builder()
                .setComponentName("RNTest")
                .build();
        getSupportFragmentManager()
            .beginTransaction()
            .add(R.id.reactNativeFragment, fragment)
            .commit();
    }

    private Bundle getLaunchOptions(String message) {
        Bundle initialProperties = new Bundle();
        initialProperties.putString("message", message);
        return initialProperties;
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        onBackPressed();
    }
}